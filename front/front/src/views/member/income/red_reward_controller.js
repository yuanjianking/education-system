import cTitle from 'components/title';
import {Toast, MessageBox} from 'mint-ui';

export default {
    data() {
        return {
            red: {},
            id: '',
        }
    },
    activated() {
        this.red = {};
        this.id = this.fun.getKey('id');
        this.getButton();
    },
    methods: {
        getButton() {
            let that = this;
            $http.get('plugin.team-dividend.api.RedPack.index', {id: that.id}, "获取中...").then(function (response) {
                if (response.result === 1) {
                    that.red = response.data.button;
                } else {
                    MessageBox.alert(response.msg, '错误提示');
                }
            }, function (response) {
                console.log(response);
            });
        },
        getRed() {
            let that = this;
            if (this.red.name !== '领取') {
                return;
            }
            $http.get('plugin.team-dividend.api.RedPack.receive', {id: that.id}, "获取中...").then(function (response) {
                if (response.result === 1) {
                    Toast({
                        message: '领取成功',
                        duration: 1500
                    });
                    that.getButton();
                    that.$router.go(-1);
                } else {
                    MessageBox.alert(response.msg, '错误提示');
                }
            }, function (response) {
                console.log(response);
            });
        },
    },
    components: {cTitle}
}