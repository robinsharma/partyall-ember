import DS from 'ember-data';

export default DS.Model.extend({
  votes: DS.attr('number'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  nowPlaying: DS.attr('boolean'),
  created: DS.attr('string'),
  source: DS.attr('string'),
  artwork: DS.attr('string'),
  artist: DS.attr('string')
});
