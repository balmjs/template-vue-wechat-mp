<template>
  <div>
    <div class="title">mp-article</div>

    <div class="comp-cnt">
      <mp-article>
        <h1>标题1</h1>
        <section>
          <h2>标题2</h2>
          <h3>标题3</h3>
          <h4>标题4</h4>
          <h5>标题5</h5>
          <h6>标题6</h6>

          <img src="https://picsum.photos/400/300" />

          <p>内容</p>

          <ol>
            <li v-for="i in 3" :key="i">有序列表{{ i }}</li>
          </ol>

          <ol>
            <li v-for="i in 3" :key="i">无序列表{{ i }}</li>
          </ol>
        </section>
      </mp-article>
    </div>
  </div>
</template>
