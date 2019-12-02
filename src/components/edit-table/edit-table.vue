<template>
  <div>
    <Table :columns="insideColumns" :data="value"></Table>
  </div>
</template>

<script>
import clonedeep from "clonedeep";
export default {
  name: "EditTable",
  data() {
    return {
      insideColumns: [],
      edittingId: "",
      edittingContent: ""
    };
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick({ row, index, column }) {
      // console.log(row, index, column);
      if (this.edittingId === `${column.key}_${index}`) {
        let tableData = clonedeep(this.value);
        tableData[index][column.key] = this.edittingContent;
        this.$emit("on-edit", {
          row,
          index,
          column,
          newValue: this.edittingContent
        });
        this.edittingId = "";
        this.edittingContent = "";
      } else {
        this.edittingId = `${column.key}_${index}`;
      }
      // console.log(this.edittingId);
    },
    handleInput(newVal) {
      this.edittingContent = newVal;
    },
    handleColumns() {
      const insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            // console.log(row, index, column.key);
            const isEditting = this.edittingId === `${column.key}_${index}`;
            return (
              <div>
                {isEditting ? (
                  <i-input
                    value={row[column.key]}
                    on-input={this.handleInput.bind(this)}
                  ></i-input>
                ) : (
                  <span>{row[column.key]}</span>
                )}
                <i-button
                  on-click={this.handleClick.bind(this, {
                    row,
                    index,
                    column
                  })}
                >
                  {isEditting ? "save" : "edit"}
                </i-button>
              </div>
            );
          };
          return item;
        } else {
          return item;
        }
      });
      this.insideColumns = insideColumns;
    }
  },
  mounted() {
    this.handleColumns();
  },
  watch: {
    columns() {
      this.handleColumns();
    }
  }
};
</script>
