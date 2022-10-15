let userDetaild = {
    fname:"radhe",
    course :[],
    buycourse: function (coursename){
        this.course.push(coursename);
    },
    getCourseCount: function(){
        return `${this.fname} have a course count of ${this.course.length}`
    }
}

userDetaild.buycourse("devops")
userDetaild.buycourse("Web development")
console.log(userDetaild)
console.log(userDetaild.getCourseCount())