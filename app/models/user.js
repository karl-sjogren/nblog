var UserModel = DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  username: DS.attr()
});

export default UserModel;