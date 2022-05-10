<template>
  <div>
    <div class="title">mp-msg</div>
    <div class="comp-cnt">
      <mp-msg type="success" title="操作成功">
        <div slot="desc">
          内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
        </div>
        <div slot="extend">
          <div>1. 说明1</div>
          <div>2. 说明2</div>
        </div>
        <div slot="handle">
          <wx-button class="wx-button" type="primary">主要操作</wx-button>
          <wx-button class="wx-button" type="default">辅助操作</wx-button>
        </div>
        <div slot="footer">
          <div class="weui-footer__links">
            <a href="" class="weui-footer__link">底部链接文本</a>
          </div>
        </div>
      </mp-msg>
    </div>
  </div>
</template>
