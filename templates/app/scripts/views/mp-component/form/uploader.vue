<template>
  <div>
    <div class="title">mp-uploader</div>
    <div class="comp-cnt">
      <mp-uploader
        :select="onSelectFile"
        :upload="onUplaodFile"
        :files="mpUploader.files"
        max-count="6"
        title="图片上传"
        tips="图片上传提示"
        @select="$store.log('[mp-uploader] select', $event.detail)"
        @delete="$store.log('[mp-uploader] delete', $event.detail)"
        @success="$store.log('[mp-uploader] success', $event.detail)"
        @fail="$store.log('[mp-uploader] fail', $event.detail)"
      ></mp-uploader>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpUploader: {
        files: [
          {
            url: 'https://i.loli.net/2019/07/27/5d3c143497e6d38917.jpg'
          },
          {
            url: 'https://i.loli.net/2019/07/27/5d3c143497e6d38917.jpg',
            loading: true
          },
          {
            url: 'https://i.loli.net/2019/07/27/5d3c143497e6d38917.jpg',
            error: true
          }
        ]
      }
    };
  },
  methods: {
    onSelectFile(files) {
      console.log('select files', files);
      // 返回false可以阻止某次文件上传
    },
    onUplaodFile(files) {
      console.log('upload files', files);
      // 文件上传的函数，返回一个promise
      if (!this._uploadError) {
        this._uploadError = true;
        return new Promise((resolve) =>
          setTimeout(() => resolve({ urls: files.tempFilePaths }), 1000)
        );
      } else {
        this._uploadError = false;
        return new Promise((resolve, reject) =>
          setTimeout(() => reject(new Error('some error')), 1000)
        );
      }
    }
  }
};
</script>
