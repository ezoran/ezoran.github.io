from tkinter import *
from tkinter import filedialog
from tkinter import StringVar
import os
import shutil

#---GLOBALS
postTitle = "Default Post Title"
postEntry = "Default Post Text"
postImage = "Default Post Image"

# global postTitle
# global postEntry

holderImageText = "Select an image to post"

#---USER INTERFACE
master = Tk()

def show_entry_fields():
   print("First Name: %s\nLast Name: %s" % (title.get(), entry.get("1.0",END)))


def image_selection():
    answer = filedialog.askopenfilename(parent=master, initialdir=os.getcwd(), title="Please select a file:",
                                        filetypes=my_filetypes)
    global holderImageText
    holderImageText = answer

    filename = os.path.basename(answer)

    displayHolderImageText.set(holderImageText)

    targetPath = os.getcwd()
    targetPath = targetPath + "\images"

    shutil.copy(holderImageText, targetPath)
    filename = targetPath + '\\' + filename

    holderImageText = filename

def set_attributes():
    global postTitle
    postTitle = title.get()
    global postEntry
    postEntry = entry.get("1.0",END)

    global postImage
    postImage = holderImageText
    master.quit()

my_filetypes = [('all files', '.*'), ('text files', '.txt')]

Label(master, text="Entry Title").grid(row=0, sticky=N)
Label(master, text="Entry Post").grid(row=1, sticky=N)

title = Entry(master, width=20)
entry = Text(master, height=20, width=40)

title.grid(row=0, column=1,sticky=W)
entry.grid(row=1, column=1)

Button(master, text='Post', command=set_attributes).grid(row=3, column=1, sticky=N+S+E+W, pady=4)
Button(master, text='Add Image', command=image_selection).grid(row=3, column=0, sticky=N+S+E+W, pady=4)

displayHolderImageText = StringVar()
displayHolderImageText.set(holderImageText)

Label(master, textvariable=displayHolderImageText).grid(row=4, column=1, sticky=E+W)

mainloop()

#---FILE HANDLING FUNCTIONS

def modifyInput(t, e, i):
    if i == "Select an image to post":
        total = '<div class="blog_post">' + '\n<div class="blog_title">' + "<a>" + t + "</a> " + '\n<div class="blog_entry">' + "<a>" + e + "</a>" + '\n</div>\n</div>\n</div>'
    elif t == "Default Post Title" and e == "Default Post Text":
        total = ""
    else:
        total = '<div class="blog_post">' + '\n<div class="blog_title">' + t + '\n<div class="blog_entry">' + e + '\n<div class="blog_image">' + "<img src=" + i + ">" + '\n</div>\n</div>\n</div>\n</div>'

    return total

def readFile():
    f = open("index.html", "r")

    content = f.readlines();
    content = [x.strip() for x in content]

    f.close()

    return content

def modifyFile(content):
    for i in content:
        if (i == "<!-- Lookat -->"):
            content.insert(content.index(i) + 1, modifyInput(postTitle,postEntry,postImage))
            break

    f = open("index.html", "w")

    f.writelines(map(lambda s: s + '\n', content))

    f.close();

#---RUNTIME

templist = readFile()
modifyFile(templist)
