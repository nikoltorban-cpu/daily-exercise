class Video{
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch(){
    return `${this.uploader} watched all ${this.time} of ${this.title}!`
  }

}

const newVideo = new Video("what have i done?", "mark son", 360);
console.log(newVideo.watch());
