import Concert from '../models/concerts';








export default {
    Query: {
        concerts: (root, args, { req }, info) => {

            //req.session.userId

            //Auth.checkSignedIn();
            return Concert.find({})
        },
        concert: (root, { id }, context, info) => {
            //Auth.checkSignedIn();

            // if (!mongoose.Types.ObjectId.isValid(id)){
            //     throw new UserInputError(`${id} is not a valid id`)
            // }
            return Concert.findById(id);
        }
    },
    Mutation: {
        
        addConcert: (root, args, { req }, info) => {


            Concert.create(args);
        }


        
    }
}