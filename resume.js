let resume = {
  Intro: [
    {
      Name: "Dastan Aibek",
      Street: "Baarova",
      City: "Prague",
      Mail: "dastan.aibek8@gmail.com",
      'Postal Code': 14000,
      /* Phone: function(code = '+420', cell = '773192459') {
                        return code + cell;
                    }*/
    },
  ],
  Certifications: [
    "Admin ",
    "AppBuilder ",
    "PD1 ",
    "Beer Expert ",
    "Lovely Son",
  ],
  Experience: [
    {
      title: "Google CEO",
      startDate: 2020,
      endDate: 2016,
      salary: "more than a lot",
      duration: function () {
        return this.endDate - this.startDate;
      },
    },
    {
      title: "Yahoo CEO",
      startDate: 2010,
      endDate: 2005,
      salary: "a lot",
      duration: function () {
        return this.endDate - this.startDate;
      },
    },
  ],
  Education: ["BA in Yahoo", "MA in Google"],
  Languages: ["English", "Czech", "Russian", "Kyrgyz", "Ukrainian"],
  Hi: function () {
    console.log('hi');
  },
};
resume.Hi();
