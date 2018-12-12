import csv

reportName = "diversity"
csv_file = "%s-report.csv"%(reportName)
with open(csv_file) as input_file:
    file_reader = csv.reader(input_file)
    input_data = []
    for row in file_reader:
        input_data.append(row)

line_index = 0
for line_index in range(len(input_data)):
    if line_index == 0: line_index +=1
    heading_number = input_data[line_index][0]
    subheading_number = input_data[line_index][1]
    anchor = input_data[line_index][2]
    text = input_data[line_index][3]

    if subheading_number != '':
        overlay_subheading_line = "        <a style=\"padding-left:5{};\" onclick=\"closeNav()\"  href=\"#{}\">{}. {}. {}</a>\n".format('%',anchor,heading_number,subheading_number,text)
        overlay_line = overlay_subheading_line
    else:
        overlay_heading_line = "<a onclick=\"closeNav()\" a href=\"#%s\">%s. %s</a>\n"%(anchor,heading_number,text)
        overlay_line = overlay_heading_line


    menu_bar_line = "<li class=\"menuitem\" style=\"display:none;\"><a href=\"#%s\">%s</a></li>\n"%(anchor,text)

    with open("%s_anchor_output_mil.txt"%(reportName),"a",encoding='utf-8') as overlay_output:
        overlay_output.write(overlay_line)
    overlay_output.close()

    with open("%s_menu_bar_output_mil.txt"%(reportName),"a",encoding='utf-8') as menu_bar_output:
        menu_bar_output.write(menu_bar_line)
    menu_bar_output.close()

    with open("%s_overlay_output_mil.txt"%(reportName),"a",encoding='utf-8') as overlay_output:
        overlay_output.write(overlay_line)
    overlay_output.close()
