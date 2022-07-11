# hard-rock-solution

### Search Song

api link: https://api.lyrics.ovh/suggest/:searchText

example: https://api.lyrics.ovh/suggest/hello

### Lyric

lyric link: https://api.lyrics.ovh/v1/:artist/:title

example: https://api.lyrics.ovh/v1/Adele/Hello

### main website

lyrics.ovh api

{data: Array(15), total: 301, next: 'http://api.deezer.com/search?limit=15&q=hi&index=15'}
aita hoilo total data. ja akta object akare ami paici api call kore.

## structure

let getdata = {
data : Array(15),
total: 301,
next : 'http: //api.deezer.com/search?limit=15&q=hi&index=15'
}
