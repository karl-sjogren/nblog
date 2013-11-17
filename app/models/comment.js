var CommentModel = DS.Model.extend({
  content: DS.attr(),
  posted: DS.attr(),
  author: DS.attr(),
  email: DS.attr(),
  gravatar: DS.attr()
});

export default CommentModel;