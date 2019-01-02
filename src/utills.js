
// parse string xml received from goodreads api
export const parseXMLResponseForSearch = response => {
    const parser = new DOMParser();
    const XMLResponse = parser.parseFromString(response, "application/xml");
    const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
    const searchResults = XMLresults.map(result => XMLToJson(result));
    return (searchResults);
};

// parse string xml received from goodreads api
export const parseXMLResponseForBookInfo = response => {
    const parser = new DOMParser();
    const XMLResponse = parser.parseFromString(response, "application/xml");
    const XMLresults = new Array(...XMLResponse.getElementsByTagName("book"));
    const searchResults = XMLToJson(XMLresults[0]);

    Object.keys(searchResults).forEach(function (key, index) {
        searchResults[key] = typeof searchResults[key] === 'string' ? searchResults[key].replace("<![CDATA[", "").replace("]]>", "") : searchResults[key];
    });
    return searchResults;
};


// Function to convert simple XML document into JSON.
// Loops through each child and saves it as key, value pair
// if there are sub-children, call the same function recursively on its children.
export const XMLToJson = XML => {
    const allNodes = new Array(...XML.children);
    const jsonResult = {};
    allNodes.forEach(node => {
        if (node.children.length) {
            jsonResult[node.nodeName] = XMLToJson(node);
        } else {
            jsonResult[node.nodeName] = node.innerHTML;
        }
    });
    return jsonResult;
};

export const parseBookDescription = res => {
    const parser = new DOMParser();
    const XMLResponse = parser.parseFromString(res.data, "application/xml");
    let description;
    description = XMLResponse.getElementsByTagName("description")[0]
        .innerHTML;
    description = description.replace("<![CDATA[", "").replace("]]>", "");
    if (!description) {
        description = "No description found.";
    }
    return description;
}


