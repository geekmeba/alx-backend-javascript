/**
 * Contains the miscellaneous route handlers.
 * @author Mebratu Hailu <https://github.com/geekmeba>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
