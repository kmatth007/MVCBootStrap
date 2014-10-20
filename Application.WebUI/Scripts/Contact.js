function ProfilesViewModel() {
    var self = this;
    self.Profiles = ko.observableArray([
         {
             "ProfileId": 1,
             "FirstName": "Anand",
             "LastName": "Pandey",
             "Email": "anand@anandpandey.com"
         },
    {
        "ProfileId": 2,
        "FirstName": "John",
        "LastName": "Cena",
        "Email": "john@cena.com"
    }
    ]);    
}

ko.applyBindings(new ProfilesViewModel());