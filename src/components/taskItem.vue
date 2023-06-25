<template>
  <div class="task-item">
    <div class="task-content-left">
      <div class="task-title">{{ task.title }}</div>
    </div>
    <div class="task-content-right">
      <button class="task-btn edit">
        <img class="edit-icon" :src="editIcon" @click="changeTaskValue(task)" />
      </button>
      <button class="task-btn complite">
        <img class="tick" v-if="complite" :src="tickComplite" @click="changeComplite(task)" />
        <img class="tick" v-else :src="tick" @click="changeComplite(task)" />
      </button>
      <button class="task-btn delete">
        <img class="delete-icon" :src="deleteIcon" @click="deleteTask(task)" />
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'TaskItem',
  data() {
    return {
      tickComplite: require('./icons/tick-complite.svg'),
      tick: require('./icons/tick.svg'),
      deleteIcon: require('./icons/delete.svg'),
      editIcon: require('./icons/edit.svg'),
    }
  },
  props: {
    task: {
      title: String,
      id: String,
      complite: Boolean
    },
    complite: Boolean
  },
  methods: {
    deleteTask(task) {
      this.$emit('deleteTask', task)
    },
    changeTaskValue(task) {
      this.$emit('changeTaskValue', task)
    },
    changeComplite(task) {
      this.$emit('changeComplite', task)
    }
  }
}
</script>