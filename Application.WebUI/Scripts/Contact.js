//function ProfilesViewModel() {
//    var self = this;
//    self.Profiles = ko.observableArray([
//         {
//             "ProfileId": 1,
//             "FirstName": "Anand",
//             "LastName": "Pandey",
//             "Email": "anand@anandpandey.com"
//         },
//    {
//        "ProfileId": 2,
//        "FirstName": "John",
//        "LastName": "Cena",
//        "Email": "john@cena.com"
//    }
//    ]);    
//}

//ko.applyBindings(new ProfilesViewModel());

self.createProfile = function () {
    alert("Create a new profile");
};

self.editProfile = function (profile) {
    alert("Edit tis profile with profile id as :" + profile.ProfileId);
};

self.removeProfile = function (profile) {
    if (confirm("Are you sure you want to delete this profile?")) {
        self.Profiles.remove(profile);
    }
};