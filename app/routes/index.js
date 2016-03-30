import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },

  actions: {
    loading: function () {
       // Add the active classes (required by the carousel to work)
       Ember.$('.carousel-inner div.item').first().addClass('active');
       Ember.$('.carousel-indicators li').first().addClass('active');
       // Set the values of data-slide-to attributes
       Ember.$('.carousel-indicators li').each(function (index, li) {
           Ember.$(li).attr('data-slide-to', index);
       });
       console.log("working");
       // Start the carousel
      //  Ember.$('.carousel').carousel();
       return true;
   },
   save3(params) {
     var newStory = this.store.createRecord('story', params);
     newStory.save();
     this.transitionTo('index');
   }
 }
});
