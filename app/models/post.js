var PostModel = DS.Model.extend({
  title: DS.attr(),
  slug:DS. attr(),
  content: DS.attr(),
  author: DS.belongsTo('user'),
  comments: DS.hasMany('comment'),
  createdAt: DS.attr(),
  modifiedAt: DS.attr()
});

export default PostModel;