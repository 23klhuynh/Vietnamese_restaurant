package com.example.phoviet.backend.service;

import com.example.phoviet.backend.DTO.CategoryDTO;
import com.example.phoviet.backend.DTO.MenuItemDTO;
import com.example.phoviet.backend.model.MenuItem;
import com.example.phoviet.backend.repository.MenuItemRepository;
import com.example.phoviet.backend.service.MenuItemService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import java.awt.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class) // Enables Mockito annotations
public class MenuItemServiceTest {

    @Mock
    private MenuItemRepository menuItemRepository; // Mock the repository

    @InjectMocks
    private MenuItemService menuItemService; // Inject mocks into the service

    // delete
    private final Long EXISTING_ID = 1L;
    private final Long NON_EXISTING_ID = 999L;

    @Test
    public void delete_WhenItemExists_ShouldDeleteAndReturnNoContent() {
        // Arrange
        when(menuItemRepository.existsById(EXISTING_ID)).thenReturn(true);

        // Act
        var response = menuItemService.delete(EXISTING_ID);

        // Assert
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(menuItemRepository, times(1)).deleteById(EXISTING_ID); // Verify deletion was called
    }

    @Test
    public void delete_WhenItemDoesNotExist_ShouldThrowNotFound() {
        // Arrange
        when(menuItemRepository.existsById(NON_EXISTING_ID)).thenReturn(false);

        // Act & Assert
        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> menuItemService.delete(NON_EXISTING_ID)
        );

        assertEquals(HttpStatus.NOT_FOUND, exception.getStatusCode());
        assertEquals("Menu Item not found", exception.getReason());
        verify(menuItemRepository, never()).deleteById(any()); // Ensure delete was never called
    }

    // add
    @Test
    public void add_WhenMenuItemIsValid_ShouldSaveAndReturnCreated(){

        MenuItem testItem = new MenuItem();
        testItem.setName("test");
        testItem.setCategory("testCategory");
        testItem.setDescription("This is for testing reason.");
        testItem.setPrice(9.3);

        // Simulate the saved object (e.g., with an auto-generated ID)
        MenuItem savedItem = new MenuItem();
        savedItem.setId(1L); // Simulate auto-generated ID
        savedItem.setName(testItem.getName());
        savedItem.setCategory(testItem.getCategory());
        savedItem.setDescription(testItem.getDescription());
        savedItem.setPrice(testItem.getPrice());

        // Mock the repository to return the saved object
        // first tell what the method is being tested and what it will return
        when(menuItemRepository.save(testItem)).thenReturn(savedItem);

        // Act
        var response = menuItemService.add(testItem);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedItem, response.getBody());
        verify(menuItemRepository, times(1)).save(testItem);

    }

    // get by id
    @Test
    public void getById_whenValidId_shouldReturnMenuItem(){

        MenuItem trueMenuItem = new MenuItem();
        trueMenuItem.setId(1l);
        trueMenuItem.setName("test");
        trueMenuItem.setCategory("test category");
        trueMenuItem.setPrice(11.00);
        trueMenuItem.setDescription("This is for testing reason.");

        when(menuItemRepository.findById(trueMenuItem.getId())).thenReturn(Optional.of(trueMenuItem));

        var response = menuItemService.getById(trueMenuItem.getId());

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void getById_whenInvalidId_shouldReturnEmpty(){

        Long invalidId = 999L;
        when(menuItemRepository.findById(invalidId)).thenReturn(Optional.empty());

        var response = menuItemService.getById(invalidId);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }


    // update
    @Test
    public void update_whenValidItem_shouldReturnUpdatedItem(){
        MenuItem oldMenuItem = new MenuItem();
        oldMenuItem.setId(1L);
        oldMenuItem.setName("old menu item");
        oldMenuItem.setCategory("old");
        oldMenuItem.setPrice(9.00);
        oldMenuItem.setDescription("Original description");

        MenuItem newMenuItem = new MenuItem();
        newMenuItem.setId(1L);
        newMenuItem.setName("new menu item");
        newMenuItem.setCategory("new");
        newMenuItem.setPrice(10.00);
        newMenuItem.setDescription("Updated description");

        when(menuItemRepository.findById(1L)).thenReturn(Optional.of(oldMenuItem));
        when(menuItemRepository.save(any(MenuItem.class))).thenReturn(newMenuItem);

        ResponseEntity<MenuItem> response = menuItemService.update(newMenuItem.getId(), newMenuItem);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("new menu item", newMenuItem.getName());
        assertEquals("new", newMenuItem.getCategory());
        assertEquals(10.00, newMenuItem.getPrice(), 0.001);
        assertEquals("Updated description", newMenuItem.getDescription());
    }

    @Test
    public void update_whenInvalidItem_shouldReturnEmpty(){

        MenuItem invalidMenuItem = new MenuItem();
        invalidMenuItem.setId(999l);
        invalidMenuItem.setName("invalid menu item");
        invalidMenuItem.setCategory("invalid");
        invalidMenuItem.setPrice(11.00);
        invalidMenuItem.setDescription("invalid dishes");

        when(menuItemRepository.findById(invalidMenuItem.getId())).thenReturn(Optional.empty());

        ResponseStatusException exception = assertThrows(ResponseStatusException.class,
                () -> menuItemService.update(invalidMenuItem.getId(), invalidMenuItem));

        assertEquals(HttpStatus.NOT_FOUND, exception.getStatusCode());
        assertEquals("Menu Item not found", exception.getReason());
    }

    // get all menu item

    @Test
    void getAllMenuCategories_ShouldReturnCategorizedMenuItems_WhenItemsExist() {
        //need work
    }


}
