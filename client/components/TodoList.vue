<template>
<mu-list>
  <mu-sub-header>TODOList</mu-sub-header>
  <mu-list-item v-for="item in list" :title="item.value">
    <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
      <mu-menu-item title="修改" />
      <mu-menu-item title="删除" />
    </mu-icon-menu>
  </mu-list-item>
  <mu-divider inset/>
</mu-list>
</template>

<script>
import reqwest from 'reqwest';

export default {
  name: 'TodoList',
  data() {
    return {
      list: [],
    };
  },
  methods: {

  },
  created() {
    const self = this;
    const request = reqwest({
      url: '/todo/list',
      method: 'GET',
    });
    request.then((result) => {
      // const resp = JSON.parse(result)
      if (!result.status) {
        self.list = result.data
      } else {
        this.emit('showToast', result.msg)
      }
    }).catch((error) => {
      this.emit('showToast', JSON.stringify(error))
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

