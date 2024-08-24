package com.pramu.todoappreactreduxmainbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/admin/todos")
    public ResponseEntity <List<Todo>> getAllTodos() throws Exception {
        List<Todo> todos= todoService.getAllTodos();
        return new ResponseEntity<>(todos, HttpStatus.OK);
    }

    @PostMapping("/admin/todos")
    public Todo addTodo(@RequestBody Todo todo) {
        return todoService.addTodo(todo);
    }

    @DeleteMapping("/user/todos/{id}")
    public void deleteTodoById(@PathVariable Long id) {
        todoService.deleteTodoById(id);
    }

    @PutMapping("/admin/todos/{id}/status")
    public Todo updateTodoStatus(@PathVariable Long id, @RequestParam boolean completed) {
        return todoService.updateTodoStatus(id, completed);
    }
}
