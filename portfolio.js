if (Meteor.isClient) {

//  Template.body.helpers({
//     author:
//       {name: "Shavonnah T"}
//   });
// }
Template.bio.helpers({
  author: ()=> {
    return Author.find({});
  }
});

Template.projects.helpers({
  projects: ()=> {
    return Projects.find({});
  }
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
