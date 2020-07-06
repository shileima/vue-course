<template>
  <div class>
    <edit-table :columns="columns" v-model="tableData" @on-edit="handleEdit"></edit-table>
  </div>
</template>

<script>
import { getTableData } from '@/api/table'
import EditTable from '_c/edit-table'
export default {
  components: {
    EditTable
  },
  data () {
    return {
      tableData: [],
      columns: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true },
        { key: 'email', title: '邮箱', editable: true }
      ]
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res.data.list
      console.log(this.tableData)
    })
  },
  methods: {
    handleEdit ({ row, index, column, newValue }) {
      console.log('handleEdit')
      console.log({ row, index, column, newValue })
      if (newValue !== '') this.tableData[index][column.key] = newValue
    }
  }
}
</script>
