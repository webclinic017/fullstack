if ($(".m_vue").attr("data-page") === "info_avatar") {
	var phoneApp = new Vue({
		el: '#m_vue_info_avatar',
		data: {
			avatar_info: '',
			avatar: {
				status: 0,
				progress: false
			}
		},
		//生成token
		created: function () {
			this.getAvatarInfo();
		},
		ready: function () {
			var self = this;
			$('#input').fileupload({
				dataType: 'json',
				autoUpload: true,
				url: '/action/public/v3/user_upload',
				add: function (e, data) {
					var file = data.files[0];
					if (file.size >= 2 * 1024 * 1024) {
						self.avatar.status = 3;
						return false;
					} else {
						self.avatar.status = 1;
						data.submit();
					}
				},
				done: function (e, data) {
					self.avatar.status = 2;
					self.avatar.progress = false;
					layer.open({
						skin: 'msg',
						content: '更改头像成功',
						time: 2
					})
					setTimeout(function () {
						self.back_setting();
					}, 1200)
				},
				progressall: function (e, data) {
					//todo 
					// self.avatar.progress = true;
					// var progress = parseInt(data.loaded / data.total * 5, 10);
					// $('.info_avatar__process_bar').css('width', progress + '%');
				}
			});
		},
		methods: {
			upload: function () {
				apiUrlResource.upload_avatar.save().then(function (res) {
					var avatar_info = JSON.parse(res.data).data.user_code;
					self.avatar_info = '/avatar/' + avatar_info + '_150.jpg'

				});
			},
			getAvatarInfo: function () {
				var self = this;
				apiUrlResource.getInfo.get().then(function (res) {
					var avatar_info = JSON.parse(res.data).data.user_code;
					self.avatar_info = '/avatar/' + avatar_info + '_150.jpg'
					//console.log(JSON.parse(res.data));
				});
			},
			chageUploadStatus: function () {
				this.avatar.status = 0;
			},
			back_setting: function () {
				callNative({
					type: "back_setting",
					url: ""
				});
			},
			showFrontErr: function (name) {
				var self = this;
				if (self.frontErr[name]) {
					self.frontErr[name]["show"] = true;
				}
			},
			hideFrontErr: function (name) {
				var self = this;

				if (self.frontErr[name]) {
					self.frontErr[name]["show"] = false;
				}
			}
		},
	});
}
