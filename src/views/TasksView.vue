<template>
  <div class="container">
    <div class="content">
      <div class="task-form">
        <input class="task-input" type="text" placeholder="Enter tasks..." v-model="taskValue">
        <button class="create-btn" @click="changed ? changeTask() : createTask()">{{ changed ? 'Change' : 'Create'
        }}</button>
      </div>
      <div class="tasks" v-if="tasks.length">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" @deleteTask="deleteTask"
          @changeTaskValue="changeTaskValue" @changeComplite="changeComplite" :complite="task.complite" />
      </div>
    </div>
  </div>
</template>

<script>

/* eslint-disable */
// import TickIcon from '../components/icons/tick.svg'
import TaskItem from '../components/taskItem.vue'
export default {
  name: 'TasksPage',
  components: {
    TaskItem
  },
  data() {
    return {
      tickComplite: require('../components/icons/tick-complite.svg'),
      tick: require('../components/icons/tick.svg'),
      deleteIcon: require('../components/icons/delete.svg'),
      editIcon: require('../components/icons/edit.svg'),
      taskValue: '',
      taskIdChange: '',
      changed: false,
      tasks: this.$store.state
    }
  },
  methods: {
    changeComplite(task) {
      task.complite = !task.complite
      this.tasks = this.tasks.map((taskItem) => taskItem.id === task.id ? task : taskItem)
      this.$store.commit('localTask', this.tasks)
    },
    changeTaskValue(task) {
      this.taskValue = task.title
      this.taskIdChange = task.id
      this.changed = true
    },
    changeTask() {
      const task = {
        title: this.taskValue,
        id: this.taskIdChange,
        complite: false
      }
      this.tasks = this.tasks.map((taskItem) => taskItem.id == this.taskIdChange ? task : taskItem)
      this.$store.commit('localTask', this.tasks)
      this.changed = false
      this.taskValue = ''
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter((taskItem) => taskItem.id !== task.id)
      this.$store.commit('localTask', this.tasks)
    },
    createTask() {
      if (!this.taskValue) {
        return
      }
      const task = {
        title: this.taskValue,
        id: Date.now(),
        complite: false
      }
      this.tasks.push(task)
      this.$store.commit('localTask', this.tasks)
      this.taskValue = ''
    }
  },
};
</script>

<style>
.tasks {
  /* border: 1px solid black; */
  width: 1000px;
  margin: 0 auto;
  padding: 6px 9px;
}

.task-item {
  /* border: 1px solid green; */
  padding: 5px 7px;
  border-radius: 3px;
  text-align: left;
  display: flex;
  background-color: white;
  align-items: center;
  margin-bottom: 10px;
}

.task-title {
  font-size: 18px;
  color: rgba(17, 16, 16, 0.89);
}

.create-btn {
  border: 0;
  cursor: pointer;
  color: white;
  width: 65px;
  padding: 4px 6px;
  border-radius: 5px;
  background-color: #ef513fc5;
  box-shadow: 1px 1px 1px 1px #b6392cc5;
  margin-left: 10px;
}

.create-btn:hover {
  box-shadow: 1px 1px 1px 1px #74241bc5;
}

.task-content-right {
  /* border: 1px solid black; */
  justify-content: center;
  width: 150px;
  display: flex;
  align-items: center;
}

.task-input {
  width: 350px;
  padding: 5px 8px;
  margin: 10px auto;
  border-radius: 3px;
  background-color: #fed2d2;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
}

.task-btn {
  background-color: white;
  border: none;
  /* border: 1px solid red; */
  width: 45px;
  height: 45px;
}

.task-content-left {
  /* border: 1px solid black; */
  width: 850px;
}

.tick {
  width: 35px;
  cursor: pointer;
}

.delete-icon {
  cursor: pointer;
  width: 25px;
  padding-bottom: 1px;
}

.edit-icon {
  cursor: pointer;
  width: 22px;
  padding-bottom: 1px;
}
</style>
