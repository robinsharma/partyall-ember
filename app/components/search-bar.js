import Ember from 'ember';

export default Ember.Component.extend({
    query: '',
    searchResults: null,

    queryChanged: Ember.observer('query', function() {
        //TODO perform search, get results and update searchResults
        console.log(this.get('query'));
    }),

    actions: {
        addSong: function(song) {
            //TODO make api call to add song to queue
            console.log(song.id);
        }
    }
});
