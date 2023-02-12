import os

file_counter = 0

# list all files inside ../alerts/


def list_files():
    files = []
    for file in os.listdir("../alerts/"):
        if file.endswith(".html"):
            files.append(file)
    return files

# create a button for each file in ../alerts/;
# <button type="button" class="alerts_btn" onclick="show_alert_menu('{filename}'); "data-modal-toggle="alert_menu">{filename}</button>


filenames = list_files()
for filename in filenames:
    file_counter += 1
    filename = filename.replace(".html", "")  # remove .html from the filename

    # print('<button type="button" class="alerts_btn" onclick="show_alert_menu(\'' + filename + '\'); "data-modal-toggle="alert_menu">' + filename + '</button>') # optional printing of the button to console

    # open alerts_index.html and add the button to the file
    with open("alerts_index.html", "a") as alerts_index:
        alerts_index.write('<button type="button" class="alerts_btn" onclick="show_alert_menu(\'' +
                           filename + '\'); "data-modal-toggle="alert_menu">' + filename + '</button>\n')

print("Total files: " + str(file_counter))  # list the total number of files
