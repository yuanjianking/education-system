import cTitle from "components/title";
import { Indicator, Toast, MessageBox } from "mint-ui";

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");

export default {
  data() {
    return {
      Data: {},
      worker_id: "",
      store_id: "",
      show: false,
      text_id: "",
      applyModel: {
        member_u_id: "",
        name: "",
        project_ids: [],
        worker_content: [],
        thumb: "",
        description: ""
      },
      isMember: {},
      showMember: false,
      member: [],
      projects: [],
      photosize: 1024 * 1024 * 4 // 图片大小限制,
    };
  },
  activated() {
    this.initData();
    this.worker_id = this.$route.query.worker_id;

    this.store_id = this.$route.params.store_id;
    if (this.worker_id) {
      this.getEditTechnician();
      this.fun.setWXTitle("编辑技师")
    }else{
      this.fun.setWXTitle("添加技师")
    }
  },
  methods: {
    initData() {
      this.text_id = "";
      this.applyModel = {
        member_u_id: "",
        name: "",
        project_ids: [],
        worker_content: [],
        thumb: ""
      };
    },
    chooseMember(item) {
      this.isMember = item;
      this.text_id = item.nickname + "  (id:"+item.uid + ")";
      this.showMember = false;
    },
    getMember() {
      $http
        .get(
          "plugin.appointment.frontend.member.query-list",
          { keyword: this.text_id },
          "获取中"
        )
        .then(response => {
          if (response.result === 1) {
            this.member = response.data;
            if (this.member.length > 0){
              this.showMember = true
            }
          } else {
            this.showMember = false;
            this.member = []
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getEditTechnician() {
      $http
        .get(
          "plugin.appointment.frontend.worker.edit-show-info",
          { worker_id: this.worker_id },
          "获取中"
        )
        .then(response => {
          if (response.result === 1) {
            this.Data = response.data;
            this.text_id =  this.Data.member_nickname + "  (id:"+ this.Data.member_u_id + ")";
            this.applyModel.name =  this.Data.name;
            this.applyModel.thumb =  this.Data.thumb;
            this.applyModel.description =  this.Data.description;
            this.applyModel.project_ids =  this.Data.project_ids.split(",");
            if (! this.Data.project_ids && this.applyModel.project_ids.length <= 0) {
              this.applyModel.project_ids.push( this.Data.project_ids);
            }
          } else {
            Toast(response.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    editTechnician() {
      if (this.showMember) {
        Toast("请选择用户");
        return
      }
      if (this.isMember.uid) {
        this.applyModel.member_u_id = this.isMember.uid;
      } else {
        this.applyModel.member_u_id =  this.Data.member_u_id;
      }

      if (!this.applyModel.member_u_id) {
        Toast("技师会员ID/昵称不能为空");
        return;
      }
      if (!this.applyModel.name) {
        Toast("技师姓名不能为空");
        return;
      }
      if (this.applyModel.project_ids.length <= 0) {
        Toast("关联项目不能为空");
        return;
      }
      if (!this.applyModel.thumb) {
        Toast("技师头像不能为空");
        return;
      }
      if (Array.isArray(this.applyModel.project_ids)) {
        this.applyModel.project_ids = this.applyModel.project_ids.join(",");
      }

      this.applyModel.worker_id = this.worker_id;

      $http
        .post(
          "plugin.appointment.frontend.worker.edit-worker",
          this.applyModel,
          "获取中"
        )
        .then(response => {
          if (response.result === 1) {
            this.$router.go(-1);
            MessageBox.alert(response.msg);
          } else {
            Toast(response.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    addTechnician() {
      if (this.isMember.uid) {
        this.applyModel.member_u_id = this.isMember.uid;
      } else if (!this.isMember.uid && this.showMember) {
        Toast("请选择用户");
        return
      }

      if (!this.applyModel.member_u_id) {
        Toast("技师会员ID/昵称不能为空");
        return;
      }
      if (!this.applyModel.name) {
        Toast("技师姓名不能为空");
        return;
      }
      if (this.applyModel.project_ids.length <= 0) {
        Toast("关联项目不能为空");
        return;
      }
      if (this.applyModel.worker_content.length <= 0) {
        Toast("技师介绍不能为空");
        return;
      }
      if (!this.applyModel.thumb) {
        Toast("技师头像不能为空");
        return;
      }

      this.applyModel.store_id = this.$route.params.store_id;

      if (Array.isArray(this.applyModel.project_ids)) {
        this.applyModel.project_ids = this.applyModel.project_ids.join(",");
      }

      $http
        .post(
          "plugin.appointment.frontend.worker.add-worker",
          this.applyModel,
          "获取中"
        )
        .then(response => {
          if (response.result === 1) {
            this.$router.go(-1);
            MessageBox.alert(response.msg);
          } else {
            Toast(response.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getProject() {
      $http
        .get(
          "plugin.appointment.frontend.project.get-list-by-store-id",
          { store_id: this.store_id },
          "获取中"
        )
        .then(response => {
          if (response.result === 1) {
            this.projects = response.data;
            this.show = true;
          } else {
            Toast(response.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    multipleMethod_1(e, flag) {
      if (e && e.length) {
        for (let i = 0; i < e.length; i++) {
          this.onRead_1(e[i], flag);
        }
      } else {
        this.onRead_1(e, flag);
      }
    },
    removeImg: function(delIndex) {
      this.applyModel.worker_content.splice(delIndex, 1);
    },
    // vant 多图片上传
    onRead_1(e, flag) {
      Indicator.open("上传中");
      let fd = new FormData();
      if (flag === true) {
        fd.append("file", e);
      } else {
        fd.append("file", e.file); // 第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
      }
      var That = this;
      axios
        .post(this.fun.getRealUrl("upload.uploadPic"), fd, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          var responseData = response.data;
          if (responseData.result === 1) {
            Indicator.close();
            That.applyModel.worker_content.push(responseData.data.img_url);
          } else {
            Toast(responseData.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    /*vant图片上传*/
    onRead(e, flag) {
      Indicator.open("上传中");
      let fd = new FormData();

      if (flag === true) {
        fd.append("file", e); // 第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
      } else {
        fd.append("file", e.file); // 第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
      }
      var That = this;
      axios
        .post(this.fun.getRealUrl("upload.uploadPic"), fd, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          var responseData = response.data;
          if (responseData.result === 1) {
            Indicator.close();
            That.applyModel.thumb = responseData.data.img_url;
          } else {
            Indicator.close();
            Toast(responseData.msg);
          }
        })
        .catch(error => {
          Indicator.close();
          console.log(error);
        });
    },
    onphotosize(e) {
      this.imgPreview(e.file, 1);
    },
    imgPreview(file, callback) {
      let self = this;
      // 判断支不支持FileReader
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader();
        // 将图片转成base64格式
        reader.readAsDataURL(file);
        // 读取成功后的回调
        reader.onloadend = function() {
          let result = this.result;
          let img = new Image();
          img.src = result;
          img.onload = function() {
            // 图片原始尺寸
            var originWidth = this.width;
            var originHeight = this.height;
            // 最大尺寸限制
            var maxWidth = 1024,
              maxHeight = 1024;
            // 目标尺寸
            var targetWidth = originWidth,
              targetHeight = originHeight;
            // 图片尺寸超过1024x1024的限制
            if (originWidth > maxWidth || originHeight > maxHeight) {
              if (originWidth / originHeight > maxWidth / maxHeight) {
                // 更宽，按照宽度限定尺寸
                targetWidth = maxWidth;
                targetHeight = Math.round(
                  maxWidth * (originHeight / originWidth)
                );
              } else {
                targetHeight = maxHeight;
                targetWidth = Math.round(
                  maxHeight * (originWidth / originHeight)
                );
              }
            }

            // canvas对图片进行缩放
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            // 清除画布
            context.clearRect(0, 0, targetWidth, targetHeight);
            // 图片压缩
            context.drawImage(img, 0, 0, targetWidth, targetHeight);
            // canvas转为blob并上传
            canvas.toBlob(function(blob) {
              // 图片ajax上传
              if (callback === 1) {
                self.onRead(blob, true);
              } else {
                self.onRead_1(blob, true);
              }
            }, file.type || "image/png");
          };
        };
      }
    }
  },
  components: { cTitle }
};
