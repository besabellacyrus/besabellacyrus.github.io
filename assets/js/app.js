var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    home: true,
    resume: false,
    projects: false,
    contact: false,
    appBg:'appBg1',
  },
  methods: {
    resumeContent: function() {
        this.home = false;
        this.projects = false;
        this.contact = false;
        this.resume = true;
        this.appBg = 'appBg2';
    },
    homeContent: function() {
        this.home = true;
        this.projects = false;
        this.contact = false;
        this.resume = false;
        this.appBg = 'appBg1';

    },
    contactContent: function() {
        this.home = false;
        this.projects = false;
        this.contact = true;
        this.resume = false;
        this.appBg = 'appBg3';
    },
    projectsContent: function() {
        this.home = false;
        this.projects = true;
        this.contact = false;
        this.resume = false;
        this.appBg = 'appBg4';
    },
  }
})