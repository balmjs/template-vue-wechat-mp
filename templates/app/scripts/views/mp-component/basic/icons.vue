<template>
  <div>
    <div class="title">mp-icon</div>
    <div class="comp-cnt">
      <mp-grids>
        <mp-grid
          v-for="item in mpIcon.list"
          :key="item.icon"
          class="mp-icon-cnt"
        >
          <mp-grid-icon>
            <mp-icon
              :type="mpIcon.filled ? 'filled' : 'outline'"
              :icon="item.icon"
              :color="item.color"
              :size="item.size"
            ></mp-icon>
          </mp-grid-icon>
          <mp-grid-label>{{ item.icon }}</mp-grid-label>
        </mp-grid>
      </mp-grids>

      <div class="opr-cnt">
        <div class="opr-label">切换黑夜模式</div>
        <wx-switch @change="onMpIconModeChange"></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">切换填充模式</div>
        <wx-switch @change="mpIcon.filled = $event.detail.value"></wx-switch>
      </div>
    </div>
  </div>
</template>

<script>
const ICONS = [
  'add-friends',
  'add',
  'add2',
  'album',
  'arrow',
  'at',
  'back',
  'back2',
  'bellring-off',
  'bellring-on',
  'camera',
  'cellphone',
  'clip',
  'close',
  'close2',
  'comment',
  'contacts',
  'copy',
  'delete-on',
  'delete',
  'discover',
  'display',
  'done',
  'done2',
  'download',
  'email',
  'error',
  'eyes-off',
  'eyes-on',
  'folder',
  'group-detail',
  'help',
  'home',
  'imac',
  'info',
  'keyboard',
  'like',
  'link',
  'location',
  'lock',
  'max-window',
  'me',
  'mike',
  'mike2',
  'mobile-contacts',
  'more',
  'more2',
  'mosaic',
  'music-off',
  'music',
  'note',
  'pad',
  'pause',
  'pencil',
  'photo-wall',
  'play',
  'play2',
  'previous',
  'previous2',
  'qr-code',
  'refresh',
  'report-problem',
  'search',
  'sending',
  'setting',
  'share',
  'shop',
  'star',
  'sticker',
  'tag',
  'text',
  'time',
  'transfer-text',
  'transfer2',
  'translate',
  'tv',
  'video-call',
  'voice',
  'volume-down',
  'volume-off',
  'volume-up'
];

export default {
  data() {
    return {
      ICONS,
      mpIcon: {
        filled: false,
        list: [
          {
            icon: 'add-friends',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          { icon: 'add', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'add2', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'album', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'arrow', color: 'rgba(0, 0, 0, .9)', size: 12, name: '' },
          { icon: 'at', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'back', color: 'rgba(0, 0, 0, .9)', size: 12, name: '' },
          { icon: 'back2', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          {
            icon: 'bellring-off',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          {
            icon: 'bellring-on',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          { icon: 'camera', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'cellphone', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'clip', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'close', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'close2', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'comment', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'contacts', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'copy', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'delete-on', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'delete', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'discover', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'display', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'done', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'done2', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'download', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'email', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'error', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'eyes-off', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'eyes-on', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'folder', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          {
            icon: 'group-detail',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          { icon: 'help', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'home', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'imac', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'info', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'keyboard', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'like', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'link', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'location', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'lock', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          {
            icon: 'max-window',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          { icon: 'me', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'mike', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'mike2', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          {
            icon: 'mobile-contacts',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          { icon: 'more', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'more2', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'mosaic', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'music-off', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'music', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'note', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'pad', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'pause', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'pencil', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          {
            icon: 'photo-wall',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          { icon: 'play', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'play2', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'previous', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'previous2', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'qr-code', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'refresh', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          {
            icon: 'report-problem',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          { icon: 'search', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'sending', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'setting', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'share', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'shop', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'star', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'sticker', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'tag', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'text', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'time', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          {
            icon: 'transfer-text',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          { icon: 'transfer2', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'translate', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          { icon: 'tv', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          {
            icon: 'video-call',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          { icon: 'voice', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' },
          {
            icon: 'volume-down',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          {
            icon: 'volume-off',
            color: 'rgba(0, 0, 0, .9)',
            size: 25,
            name: ''
          },
          { icon: 'volume-up', color: 'rgba(0, 0, 0, .9)', size: 25, name: '' }
        ]
      }
    };
  },
  methods: {
    onMpIconModeChange(evt) {
      const colorLight = 'rgba(0, 0, 0, .9)';
      const colorDark = 'rgba(255, 255, 255, .8)';
      const color = evt.detail.value ? colorDark : colorLight;
      this.mpIcon.list.forEach((item) => (item.color = color));
    }
  }
};
</script>
