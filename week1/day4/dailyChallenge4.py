#coffee shop menu menager
menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

def show_menu(menu_dict):
    if not menu_dict:
        print("the menu is empty")
    else:
        print("current Menu:")
        for item, price in menu_dict.items():
            print(f"{item} - {price}$")
    print()

def add_item(menu_dict):
    item = input("enter new drink name: ")
    price = float(input("enter the price: "))
    if price < 0:
        print("invalid price")
        return
    else:
        menu_dict[item] = price
        print(f"{item} has been added") 
        print()  

def update_price(menu_dict):
    item = input("enter the drink name to update: ")
    if item in menu_dict:
        new_price = float(input("enter the new price: "))
        menu_dict[item] = new_price
        print(f"{item} price has been updated")
        print()
    else:
        print(f"{item} not found in the menu")
        print()

def delete_item(menu_dict):
    item = input("enter the drink name you would like to remove: ")
    if item in menu_dict:
        del menu_dict[item]
        print(f"{item} has been deleted")
        print()
    else:
        print(f"{item} not found in the menu") 
        print()

def show_options():
    print("what would you like to do?")
    print("1. Show Menu")
    print("2. Add Item")
    print("3. Update Price")
    print("4. Delete Item")
    print("5. Exit")
    print("6. Search Item")
    print("7. Apply Discount")
    print()

def run_coffee_shop():
    while True:
        show_options()
        choice = input("enter your choice (1-7): ")
        if choice == "1":
            show_menu(menu)
        elif choice == "2":
            add_item(menu)
        elif choice == "3":
            update_price(menu)
        elif choice == "4":
            delete_item(menu)
        elif choice == "5":
            print("goodbye!")
        elif choice == "6":
            search_item(menu)
            break
        elif choice == "7":
            discount_percent = float(input("enter discount percentage: "))
            apply_discount(menu, discount_percent)
        else:
            print("invalid choice, try again") 

def search_item(menu_dict):
    item = input("enter the drink name to search: ")
    if item in menu_dict:
        print(f"{item} is available for {menu_dict[item]}$")
    else:
        print(f"{item} not found in the menu")

def apply_discount(menu_dict, precent):
    for item in menu_dict:
        menu_dict[item] -= round(menu_dict[item] * (precent / 100), 2)
    print(f"applied a {precent}% discount to all items")
    return menu_dict          

show_menu(menu)
run_coffee_shop()

