# import OS module
import os, sys
import xml.etree.ElementTree as ET


#/* eslint-disable max-len */
#// start positioning
#// "bock " -> "block editable="false" deletable="false" "
#// "shadow " -> "shadow editable="false" "
#// x="0" -> y="height+20"
# underblocks movable="false"
 
# Get the list of all files and directories
path = "./original_xml"
dir_list = os.listdir(path)
 
print("Files and directories in '", path, "' :")
 
# prints all files
print(dir_list)

for filename in dir_list:
    f = open('./original_xml/'+filename, "r")
    # print(f.read())
    original_xml = f.read()
    f = open('./transformed_xml/'+filename, "w")
    f.write(original_xml.replace('`','-'))
    f.close()

    #original_xml.replace("bock ", "block editable="false" deletable="false" ")
    #original_xml.replace("shadow ", "shadow editable="false" ")

    mytree = ET.parse('./transformed_xml/'+filename)
    myroot = mytree.getroot()
    counter1 = 0
    count = 0
    for toplevelelement in myroot:
        if '}block' in toplevelelement.tag:
            counter1 += 1
            toplevelelement.set('editable', 'false')
            toplevelelement.set('deletable', 'false')
            for child in toplevelelement.findall('.//{https://developers.google.com/blockly/xml}field'):
                print(child.tag)
                if child.text != None:
                    if 'Title: ' in child.text:
                        print('Text '+child.text)
                        count += 1
                        child.text = child.text.replace('Title: ','')
                        toplevelelement.set('type','group_title')
                        toplevelelement.set('movable','false')
        #for secondlevel in toplevelelement:
            #print(secondlevel)
        #    for thirdlevel in secondlevel:
                #print(thirdlevel)

    counter2 = 0
    for block in myroot.findall('.//{https://developers.google.com/blockly/xml}block'):
        if block.get('editable') != 'false':
            counter2 += 1
            block.set('movable','false')
            block.set('editable', 'false')
            block.set('deletable', 'false')

    

    for shadow in myroot.findall('.//{https://developers.google.com/blockly/xml}shadow'):
        shadow.set('deletable', 'false')

    print('renamed blocks '+str(count))
    print(counter1)
    print(counter2)

    mytree.write('./transformed_xml/'+filename)
    f = open('./transformed_xml/'+filename, "r")
    # print(f.read())
    original_xml = f.read()
    javascript = '/* eslint-disable camelcase */\nconst '+ filename.replace('.xml','')+'_blocklibrary = `' + original_xml.replace('ns0:','').replace(':ns0','') + '`;\n\nexport default '+filename.replace('.xml','')+'_blocklibrary;\n'
    f = open('./blocklibraries/'+filename.replace('xml','js'), "w")
    f.write(javascript)
    f.close()