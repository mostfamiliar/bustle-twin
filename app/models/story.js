import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  author: DS.attr(),
  authorTitle: DS.attr(),
  body: DS.attr(),
  date: DS.attr(),
  image: DS.attr()
});
