<template>
  <div>
    <div class="title">wx-rich-text</div>
    <div class="comp-cnt">
      <wx-rich-text
        class="wx-rich-text"
        space="emsp"
        :nodes="wxRichText.nodes1"
      ></wx-rich-text>
      <wx-rich-text
        class="wx-rich-text"
        :nodes="wxRichText.nodes2"
      ></wx-rich-text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wxRichText: {
        nodes1: `<div class="div_class">
          <h1>Title</h1>
          <p class="p">
              Life is&nbsp;<i>like</i>&nbsp;a box of
              <b>&nbsp;chocolates</b>.
          </p>
        </div>`,
        nodes2: [
          {
            name: 'div',
            attrs: {
              class: 'div_class',
              style: 'line-height: 60px; color: #1AAD19;'
            },
            children: [
              {
                type: 'text',
                text: "You never know what you're gonna get."
              }
            ]
          }
        ]
      }
    };
  }
};
</script>
