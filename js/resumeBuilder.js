/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
            "name" : "Luis Morin",
            "role" : "Web Developper",
            "contacts" : {
                        "mobile" : "(514) 804-5906",
                        "email" : "luis.morin@gmail.com",
                        "github" : "lamorin",
                        "twitter" : "@lamorin",
                        "location" : "Montreal"
                        },
            "bio-pic" : "images/me.jpg",
            "skills" : ["Java", "JavaScript", "CSS3", "HTML5", "SQL","Spring Framework","Git"],
            "display" : function() {
                            var formattedName = HTMLheaderName.replace("%data%", inName());
                            var formattedRole = HTMLheaderRole.replace("%data%", this.role);
                            var formattedBioPic = HTMLbioPic.replace("%data%", this["bio-pic"]);

                            $("#header").prepend(formattedRole);
                            $("#header").prepend(formattedName);

                            var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
                            $("#topContacts").append(formattedMobile);

                            var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
                            $("#topContacts").append(formattedEmail);

                            var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
                            $("#topContacts").append(formattedGitHub);

                            var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
                            $("#topContacts").append(formattedTwitter);


                            $("#header").append(formattedBioPic);

                            $("#header").append(HTMLskillsStart);

                            for (skill in this.skills) {
                                var formattedSkill = HTMLskills.replace("%data%", this.skills[skill]);
                                $("#skills").append(formattedSkill);
                            }

                        }
            };

var education = {
                    "schools" : [
                                    {
                                        "name" : "Universidad Catolica Andres Bello (UCAB)",
                                        "years" : "2003-2008",
                                        "degree" : "B.S.",
                                        "major" : "Software Engineering",
                                        "location" : "Caracas"
                                    }
                                ],

                    "display" : function() {
                                    for (school in this.schools) {
                                        $("#education").append(HTMLschoolStart);

                                        var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
                                        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
                                        var formatteNameDegree = formattedSchoolName + " " + formattedSchoolDegree;
                                        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].major);
                                        var formattedSchoolYears = HTMLschoolDates.replace("%data%", this.schools[school].years);

                                        $(".education-entry:last").append(formatteNameDegree);
                                        $(".education-entry:last").append(formattedSchoolYears);
                                        $(".education-entry:last").append(formattedSchoolMajor);
                                    }
                                }
                };

var work = {
             "jobs" : [
                        {
                        "position" : "Analyst",
                        "employer" : "Loto-Québec",
                        "years" : "2009-2017",
                        "location" : "Montreal",
                        "description" : "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment"
                        },
                        {
                        "position" : "Especialista",
                        "employer" : "Seguros Mercantil",
                        "years" : "2006-2008",
                        "location" : "Caracas",
                        "description" : "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment"
                        }
                    ],
             "display" : function() {
                            for (job in work.jobs) {
                                $("#workExperience").append(HTMLworkStart);

                                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
                                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                                var formattedWorkYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
                                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

                                $(".work-entry:last").append(formattedEmployerTitle);
                                $(".work-entry:last").append(formattedWorkYears);
                                $(".work-entry:last").append(formattedDescription);
                            }
                        }
            };

var projects = {
                "projects" : [
                                {
                                "title" : "Resume",
                                "dates" : "2017-2017",
                                "description" : "Udacity resume",
                                "images" : [],
                                }
                             ],

                "display" : function() {
                                $("#projects").append(HTMLprojectStart);

                                for (project in this.projects) {
                                    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
                                    var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
                                    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);

                                    $(".project-entry:last").append(formattedProjectTitle);
                                    $(".project-entry:last").append(formattedProjectDates);
                                    $(".project-entry:last").append(formattedProjectDescription);
                                }

                            }
            };



var inName = function() {
    var name = bio.name.split(" ");
    //name[0] = name[0].toLowerCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    name = name.join(" ");
    return name;
}



bio.display();
work.display();
projects.display();
education.display();


//$("#main").append(bio.name);
//$("#main").append(work["position"]);
//$("#main").append(education.schools.name);

$("#mapDiv").append(googleMap);

