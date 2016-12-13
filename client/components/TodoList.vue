<template>
<div class="todo-list">
<mu-list>
  <mu-sub-header>TODOList</mu-sub-header>
  <mu-paper class="demo-paper" :zDepth="1" v-for="(item, index) in list">
    <mu-list-item  :title="item.name">
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="修改" @click="updateList(index)"/>
        <mu-menu-item title="删除" @click="deleteList(index)"/>
      </mu-icon-menu>
    </mu-list-item>
  </mu-paper>
</mu-list>
<mu-text-field :label="action" hintText="随便输点什么" type="list" v-model="text" labelFloat/>
<mu-raised-button label="提交" class="raised-button" @click="submit"/>
</div>
</template>

<script>
import reqwest from 'reqwest';

export default {
  name: 'TodoList',
  data() {
    return {
      list: [],
      text: '',
      id: null,
      index: 0,
      action: '新增',
    };
  },
  methods: {
    submit() {
      const self = this
      if (this.text === '') {
        this.$emit('showToast', '请随便输入点什么')
        return
      }
      let path
      let postData

      if (this.id === null) {
        path = '/todo/add'
        postData = { text: this.text }
      } else {
        path = '/todo/update'
        postData = { text: this.text, id: this.id }
        this.id = null
      }

      const request = reqwest({
        url: path,
        method: 'POST',
        data: postData,
      });
      request.then((result) => {
        if (!result.status) {
          if (path === '/todo/add') {
            self.list.push({ name: this.text })
          } else {
            self.list[this.index].name = this.text
          }
          this.text = ''
        } else {
          this.$emit('showToast', result.msg)
        }
        this.action = '新增'
      }).catch((error) => {
        this.$emit('showToast', JSON.stringify(error))
      })
    },
    updateList(index) {
      this.text = this.list[index].name
      this.id = this.list[index]._id
      this.index = index
      this.action = '修改'
    },
    deleteList(index) {
      const self = this
      const request = reqwest({
        url: '/todo/delete',
        method: 'POST',
        data: { id: this.list[index]._id },
      });
      request.then((result) => {
        if (!result.status) {
          self.list.splice(index, 1)
          this.text = ''
        } else {
          this.$emit('showToast', result.msg)
        }
      }).catch((error) => {
        this.$emit('showToast', JSON.stringify(error))
      })
    },
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
        this.$emit('showToast', result.msg)
      }
    }).catch((error) => {
      this.$emit('showToast', JSON.stringify(error))
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list{
  width: 400px;
  margin: 0 auto;
}
.raised-button{
  margin-left: 12px;
}
.demo-paper{
  margin-bottom: 8px;
}

</style>

