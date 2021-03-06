/**returns all existing Links
   @params: none
   @return: [{survey,admin},{survey,admin},{survey,admin},{survey,admin}]
*/
getCurrLinks()
// IMPLIMIENTED AS PER REQUEST db_get.js getCurrLinks() ////////////////////////////////////////////////////////////////////////////////////////////

/**creates a poll and returns the id
   @params: poll: {
               creatorID,
               title,
               description,
               adminLink,
               surveyLink,
               timeCreated
            }
   @return: id of new poll
*/
createPoll(newPoll)
// IMPLIMIENTED AS PER REQUEST db_put.js put_new_poll(newPoll)////////////////////////////////////////////////////////////////////////////////////////////

/**takes a pollID and returns poll object
   @params: pollID: 1
   @return: {creatorID,
               title,
               description,
               adminLink,
               surveyLink,
               timeCreated
            };
*/
getPollData(pollID)
// IMPLIMIENTED AS PER REQUEST get.js getPollData(poll_id) ////////////////////////////////////////////////////////////////////////////////////////////

/**takes a pollID and returns array of pollOptions
   @params: pollID: 1
   @return: ["option1","option2","option3"]
*/
getPollOptions(pollID)
// IMPLIMIENTED AS PER REQUEST get.js getPollChoices(poll_id) ////////////////////////////////////////////////////////////////////////////////////////////

/**takes in array of the new options and the poll_id to add to
   @params:
   pollOptions:["option1","option2","option3"]
   pollID: 1
   @return: none
*/
insertPollOptions(pollOptions, pollID) // IMPLEMENTED ///////////////////////////////////////////////////////////////////////////
// AS const putAllPollChoices = function (choice_names, poll_id) 
// choice_names is an array of strings
// poll_id is integer database id for poll

/**takes a pollID and returns array of pollOptions and ratings
   @params: pollID: 1
   @return: [{option1:10},{option2:20},{option3:145}]
*/
getPollRatings(pollID) // IMPLEMENTED /////////////////////////////////////////////////////
// const getPollRatings = function (poll_id) { in db_get.js
// poll_id is self described
// returns an array with table entries for all options of a poll

/**takes a pollID and returns array of pollOptions and ratings
   @params:pollRatings:[{option1:10},{option2:20},{option3:145}], pollID: 1
   @return: true/false for inserted or not
*/
insertPollRatings(pollRatings)


/** given the admin Link return the pollID 
   @params adminLink: http://localhost:8080/poll/43S25H/admin
   @return: the admin's id
*/
getPollId(adminLink)

/** given the admin Link return the pollID 
   @params email: blah@gmail.com
   @return: promise with creator_id
*/
getCreatorIdByEmail(email)


/** given the admin Link return the pollID 
   @params newCreator: newCreator = {
            email: req.body.creator_email,
            user_name: req.body.creator_email,
            password: "password",
            phone_number: null
          }
   @return: promise with the newly creator_id
*/
insertIntoCreators(creator)

/** Given the poll ID increase the pollTotal by 1, returning total_votes max_votes
 * @params pollID
 * @return: {total_votes:10, max_votes:11}
 */
incrementTotalVotes(pollID)

