/**
 * CardController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/card/createCard`
   */
  index: function (req, res) {

      // Send a JSON response
      return res.json({
          hello: 'world fuck you'
      });
  },


   createCard: function (req, res) {
       var howMany = req.param('id');
       if(howMany > 4 || howMany < 0){
           //Die error
           return res.json({
               error: 'An error just happened, please contact your Bingo manager'
           });
       }

       var deck = [];

        for(var i = 0; i<howMany;i++){
            var element = {};
            element.card = cardService.createCard();
            deck.push(element);

        }

    //cardService.createCard()
       return res.json({
           deck: deck
       });
  },


  /**
   * Action blueprints:
   *    `/card/DestroyCard`
   */
   DestroyCard: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/card/index`
   *    `/card`
   */



  /**
   * Action blueprints:
   *    `/card/showCard`
   */
   showCard: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CardController)
   */
  _config: {}

  
};
