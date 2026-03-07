import Calls from "../components/Calls";
import Classes from "../components/Classes";
import Groups from "../components/Groups";
import Subjects from "../components/Subjects";
import Teachers from "../components/Teachers";

export default {
  routes: {
    'Звонки': Calls,
    'Группы': Groups,
    'Предметы': Subjects,
    'Преподаватели': Teachers,
    'Аудитории': Classes,
  },

  getRoute(route){
    return this.routes[route] ? this.routes[route]() : null
  }
}


