import DiscourseRoute from 'discourse/routes/discourse';

/**
 * Route for the path `/name` as defined in `../name-route-map.js.es6`.
 */
export default DiscourseRoute.extend({
  showFooter: true,

  renderTemplate() {
    // Renders the template `../templates/name.hbs`
    this.render('home');
  }
});