import Ember from 'ember';

var MOCK_QUEUE = [
    {
        "votes": 1,
        "title": "All The Way Up (Bhangra Remix) - DJ Twinbeatz",
        "url": "https://api.soundcloud.com/tracks/267721521/stream",
        "now_playing": true,
        "created": 1477018703000,
        "source": "https://soundcloud.com/djtwinbeatzremix/all-the-way-up-bhangra-remix-dj-twinbeatz",
        "artwork": "https://i1.sndcdn.com/artworks-000166108488-8ft0lf-t500x500.jpg",
        "artist": "All The Way Up (Twinbeatz Remix)",
        "id": 5722383033827328
    },
    {
        "votes": 1,
        "title": "Where Are Ü Now (with Justin Bieber)",
        "url": "https://api.soundcloud.com/tracks/193270658/stream",
        "now_playing": false,
        "created": 1477030807000,
        "source": "https://soundcloud.com/jacku/skrillex-and-diplo-present-1",
        "artwork": "https://i1.sndcdn.com/artworks-xU1j9azFtjBz-0-large.jpg",
        "artist": "Jack Ü",
        "id": 5722383033827328
    },
    {
        "votes": 1,
        "title": "Desi Daru (Twinbeatz Remix)",
        "url": "https://api.soundcloud.com/tracks/271019018/stream",
        "now_playing": false,
        "created": 1477018810000,
        "source": "https://soundcloud.com/thedjtwinbeatz/desi-daru-twinbeatz-remix",
        "artwork": "https://i1.sndcdn.com/artworks-000169114648-3d9qu8-t500x500.jpg",
        "artist": "Desi Daru (Twinbeatz Remix)",
        "id": 5742351410528256
    },
    {
        "votes": 1,
        "title": "Where Are Ü Now (with Justin Bieber)",
        "url": "https://api.soundcloud.com/tracks/193270658/stream",
        "now_playing": false,
        "created": 1477030807000,
        "source": "https://soundcloud.com/jacku/skrillex-and-diplo-present-1",
        "artwork": "https://i1.sndcdn.com/artworks-xU1j9azFtjBz-0-large.jpg",
        "artist": "Jack Ü",
        "id": 5742351410528256
    },
    {
        "votes": 1,
        "title": "Desi Daru (Twinbeatz Remix)",
        "url": "https://api.soundcloud.com/tracks/271019018/stream",
        "now_playing": false,
        "created": 1477018810000,
        "source": "https://soundcloud.com/thedjtwinbeatz/desi-daru-twinbeatz-remix",
        "artwork": "https://i1.sndcdn.com/artworks-000169114648-3d9qu8-t500x500.jpg",
        "artist": "Desi Daru (Twinbeatz Remix)",
        "id": 5742351410528256
    }
];

export default Ember.Controller.extend({
    nowPlaying: MOCK_QUEUE[0],
    queue: MOCK_QUEUE.slice(1),

    isPlaying: false,
    actions: {
        togglePlay: function() {
            this.toggleProperty('isPlaying');
        },
        nextSong: function() {
            //TODO make api call to pop queue and set next song as now playing
            console.log('TODO');
        },
        playSong: function(song) {
            //TODO make api call to set `song` to now playing
            console.log(song.id);
        }
    }

});
