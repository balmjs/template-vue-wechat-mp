<template>
  <div>
    <div class="title">mp-slideview</div>

    <div class="comp-cnt mp-sliderview-cnt">
      <div class="mp-slideview-1">
        <mp-slideview
          show="true"
          :buttons="mpSlideView.buttons"
          @buttontap="log('[mp-slideview] buttontap', $event.detail)"
        >
          <mp-cell value="左滑可以删除" footer="说明文字"></mp-cell>
        </mp-slideview>
      </div>
      <div class="mp-slideview-2">
        <mp-slideview
          :buttons="mpSlideView.buttons"
          icon="true"
          @buttontap="log('[mp-slideview] buttontap', $event.detail)"
        >
          <div class="weui-slidecell">左滑可以删除（图标Button）</div>
        </mp-slideview>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpSlideView: {
        buttons: [
          {
            text: '普通',
            src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMicgaGVpZ2h0PScyMicgdmlld0JveD0nMCAwIDIyIDIyJz4gPHBhdGggZmlsbC1vcGFjaXR5PScuOScgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMTcuNjc4IDExLjU5MWEzLjQ4MyAzLjQ4MyAwIDAgMC00Ljk2NC00Ljg4N2MtLjE3Ny4xNzYtLjQuMzkxLS42NzIuNjQ4bC0uNzU0LjcxLS43NTUtLjcxYTMyLjMzNyAzMi4zMzcgMCAwIDEtLjY3MS0uNjQ4IDMuNDgzIDMuNDgzIDAgMCAwLTQuOTI3IDAgMy40ODEgMy40ODEgMCAwIDAtLjA1IDQuODc2bDYuNDAzIDYuNDAyIDYuMzktNi4zOXpNNC4xNTggNS45MjZhNC41ODMgNC41ODMgMCAwIDEgNi40ODEgMGMuMTY4LjE2Ny4zODQuMzc2LjY0OS42MjUuMjY0LS4yNS40OC0uNDU4LjY0OC0uNjI1YTQuNTgzIDQuNTgzIDAgMCAxIDYuNTMxIDYuNDMxbC02LjUzMSA2LjUzMmEuOTE3LjkxNyAwIDAgMS0xLjI5NyAwbC02LjUzMS02LjUzMWE0LjU4NCA0LjU4NCAwIDAgMSAuMDUtNi40MzJ6Jy8+PC9zdmc+',
            data: { test: 'a' }
          },
          {
            text: '普通',
            extClass: 'test',
            src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMicgaGVpZ2h0PScyMicgdmlld0JveD0nMCAwIDIyIDIyJz4gPHBhdGggZmlsbC1vcGFjaXR5PScuOScgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMTQuNjEzIDEzLjA5bDMuNjEzLTMuNTIxLTQuOTkzLS43MjZMMTEgNC4zMiA4Ljc2NyA4Ljg0M2wtNC45OTMuNzI2IDMuNjEzIDMuNTIyLS44NTMgNC45NzJMMTEgMTUuNzE2bDQuNDY2IDIuMzQ3LS44NTMtNC45NzJ6TTExIDE2Ljk1OUw2LjcxNyAxOS4yMWEuOTE3LjkxNyAwIDAgMS0xLjMzLS45NjZsLjgxOC00Ljc3LTMuNDY1LTMuMzc3YS45MTcuOTE3IDAgMCAxIC41MDgtMS41NjNsNC43ODktLjY5NiAyLjE0MS00LjM0YS45MTcuOTE3IDAgMCAxIDEuNjQ0IDBsMi4xNDEgNC4zNCA0Ljc4OS42OTZhLjkxNy45MTcgMCAwIDEgLjUwOCAxLjU2M2wtMy40NjUgMy4zNzguODE4IDQuNzY5YS45MTcuOTE3IDAgMCAxLTEuMzMuOTY2TDExIDE2Ljk1OHonLz48L3N2Zz4=',
            data: { test: 'b' }
          },
          {
            type: 'warn',
            text: '警示',
            extClass: 'test',
            src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMicgaGVpZ2h0PScyMicgdmlld0JveD0nMCAwIDIyIDIyJz4gPHBhdGggZmlsbC1vcGFjaXR5PScuOScgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNNi4yMSA1Ljg2N2wuNzQ0IDEyLjUxYy4wMjMuMzg3LjM0NC42OS43MzIuNjloNi42MjhhLjczMy43MzMgMCAwIDAgLjczMi0uNjlsLjc0NS0xMi41MUg2LjIwOXptMTAuNjgzIDBsLS43NDkgMTIuNTc1YTEuODMzIDEuODMzIDAgMCAxLTEuODMgMS43MjVINy42ODZjLS45NyAwLTEuNzczLS43NTYtMS44My0xLjcyNUw1LjEwNyA1Ljg2N0gzLjIwOHYtLjY0MmMwLS4yNTMuMjA2LS40NTguNDU5LS40NThoMTQuNjY2Yy4yNTMgMCAuNDU5LjIwNS40NTkuNDU4di42NDJoLTEuOXptLTQuMDYtMy4xMTdjLjI1MyAwIC40NTkuMjA1LjQ1OS40NTh2LjY0Mkg4LjcwOHYtLjY0MmMwLS4yNTMuMjA2LS40NTguNDU5LS40NThoMy42NjZ6bS00LjEyNSA1LjVoMS4xbC40NTkgOC4yNWgtMS4xbC0uNDU5LTguMjV6bTMuNDg0IDBoMS4xbC0uNDU5IDguMjVoLTEuMWwuNDU5LTguMjV6Jy8+PC9zdmc+',
            data: { test: 'c' }
          }
        ]
      }
    };
  }
};
</script>
