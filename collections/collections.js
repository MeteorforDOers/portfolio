Author = new Mongo.Collection("author");

Social = new SimpleSchema({
  network: {
    type: String
  },
  url: {
    type: String
  }
});

AuthorSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  bio: {
    type: String,
    label: "Bio"
  },
  social: {
    type: [Social]
  }
});

Author.attachSchema(AuthorSchema);

Projects = new Mongo.Collection("projects");

ProjectsSchema = new SimpleSchema({
  img: {
    type: String,
    label: "Image Url"
  },
  title: {
    type: String,
    label: "Title"
  },
  description: {
    type: String,
    label: "Description"
  },
  projectUrl: {
    type: String,
    label: "Project Url"
  }
});

Projects.attachSchema(ProjectsSchema);