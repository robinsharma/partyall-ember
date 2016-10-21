import Ember from 'ember';
import DS from 'ember-data';

var MOCK_QUEUE = [
    {
        "votes": 1,
        "title": "All The Way Up (Bhangra Remix) - DJ Twinbeatz",
        "url": "https://api.soundcloud.com/tracks/267721521/stream",
        "now_playing": true,
        "created": 1477018703000,
        "source": "https://soundcloud.com/djtwinbeatzremix/all-the-way-up-bhangra-remix-dj-twinbeatz",
        "artwork": "https://i1.sndcdn.com/artworks-000166108488-8ft0lf-large.jpg",
        "artist": "All The Way Up (Twinbeatz Remix)",
        "id": 5722383033827328
    },
    {
        "votes": 1,
        "title": "Desi Daru (Twinbeatz Remix)",
        "url": "https://api.soundcloud.com/tracks/271019018/stream",
        "now_playing": false,
        "created": 1477018810000,
        "source": "https://soundcloud.com/thedjtwinbeatz/desi-daru-twinbeatz-remix",
        "artwork": "https://i1.sndcdn.com/artworks-000169114648-3d9qu8-large.jpg",
        "artist": "Desi Daru (Twinbeatz Remix)",
        "id": 5742351410528256
    },
    {
        "votes": 1,
        "title": "Desi Daru (Twinbeatz Remix)",
        "url": "https://api.soundcloud.com/tracks/271019018/stream",
        "now_playing": false,
        "created": 1477018810000,
        "source": "https://soundcloud.com/thedjtwinbeatz/desi-daru-twinbeatz-remix",
        "artwork": "https://i1.sndcdn.com/artworks-000169114648-3d9qu8-large.jpg",
        "artist": "Desi Daru (Twinbeatz Remix)",
        "id": 5742351410528256
    }
];

export default DS.Adapter.extend({
    findAll() {
        return new Ember.RSVP.Promise(function(resolve) {
            //TODO actual api call to partyall-service
            resolve(MOCK_QUEUE);
        });
    }
});
