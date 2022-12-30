dataSetVersion = "2022-12-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Status",
    key: "series",
    tooltip: "Check this to restrict to certain statuses.",
    checked: false,
    sub: [
        { name: "Watching", tooltip: "Currently Watching Anime", key: "CURRENT" },
        { name: "Completed", tooltip: "Completed Anime", key: "COMPLETED" },
        { name: "Dropped", tooltip: "Dropped Anime", key: "DROPPED" },
        { name: "On Hold", tooltip: "On Hold Anime", key: "PAUSED" },
        { name: "Planning", tooltip: "Planning Anime", key: "PLANNING" },
    ]
  },
  {
    name: "Filter by format",
    key: "format",
    tooltip: "Check this to restrict certain formats.",
    checked: false,
    sub: [ 
      { name: "TV", key: "TV" }, 
      { name: "ONA", key: "ONA" }, 
      { name: "Movie", key: "MOVIE" }, 
      { name: "Special", key: "SPECIAL" }, 
      { name: "TV Short", key: "TV SHORT" }, 
      { name: "OVA", key: "OVA" }, 
    ]
  },
  // {
  //   name: "Remove PC-98 Duplicates",
  //   key: "pc98",
  //   tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  // },
  // {
  //   name: "Remove Non-Girls",
  //   key: "notgirl",
  //   tooltip: "Check this to remove all non-female characters."
  // },
  // {
  //   name: "Remove Nameless Characters",
  //   key: "nameless",
  //   tooltip: "Check this to remove all characters without canonical names.",
  //   checked: false
  // }
];

// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
var query = `
query ($userName: String) {
  MediaListCollection (userName: $userName, type: ANIME) { 
      lists {
          status
          entries
          {
              status
              completedAt { year month day }
              startedAt { year month day }
              progress
              progressVolumes
              score
              notes
              private
              media
              {
                  id
                  idMal
                  season
                  seasonYear
                  format
                  source
                  episodes
                  chapters
                  volumes
                  title
                  {
                      english
                      romaji
                  }
                  description
                  coverImage { medium }
                  synonyms
                  isAdult
              }
          }
      }
  }
  }
`;

var animeListUserName = prompt("What is your AniList username (must be public)?");
// Define our query variables and values that will be used in the query request
var variables = {
    userName: animeListUserName

};

// Define the config we'll need for our Api request
var url = 'https://graphql.anilist.co',
    URLoptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

// Make the HTTP Api request
fetch(url, URLoptions).then(handleResponse)
                   .then(handleData)
                   .catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

var animeData;
dataSet[dataSetVersion].characterData = []

function handleData(data) {
    animeData = data;
    console.log(data);
    for (let i = 0; i < animeData.data.MediaListCollection.lists.length; i++) {
        //console.log(i);
        for (let j = 0; j < animeData.data.MediaListCollection.lists[i].entries.length; j++){
            //console.log(j);
            var currentAnimeTitle;

            if (animeData.data.MediaListCollection.lists[i].entries[j].media.title.english == null){
                currentAnimeTitle = animeData.data.MediaListCollection.lists[i].entries[j].media.title.romaji;
            }else{
                currentAnimeTitle = animeData.data.MediaListCollection.lists[i].entries[j].media.title.english;
            }

            var currentAnimeData =
                {
                    name: currentAnimeTitle,
                    img: animeData.data.MediaListCollection.lists[i].entries[j].media.coverImage.medium,
                    opts: {
                        series: [animeData.data.MediaListCollection.lists[i].entries[j].status],
                        format: [animeData.data.MediaListCollection.lists[i].entries[j].media.format],
                    }
                }
            ;

            dataSet[dataSetVersion].characterData.push(currentAnimeData)
        }
    }
    console.log(dataSet[dataSetVersion].characterData);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}





