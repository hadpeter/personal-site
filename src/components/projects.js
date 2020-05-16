import React, { Component } from "react";
import Container from 'react-bootstrap/Button';

class Projects extends Component{
    render(){
        return <section id = "projects">
            <head class="resume-section p-3 p-lg-5 d-flex align-items-center">
                Projects
            </head>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">Personal Projects</h3>
                <div class="subheading mb-3">Meal Tracking iOS App</div>
                <ul>
                <li>
                    Developed a mobile app that allows users to upload photos of, title, and assign ratings to meals. The tool can be used to track diets, cooking recipes, or favorite restaurants
                </li>
                <li>
                    Written in Swift
                </li>
                </ul>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-primary">Winter 2020</span>
            </div>
            </div>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">EECS 485 Projects</h3>
                <div class="subheading mb-3">Search Engine</div>
                <ul>
                <li>
                    Developed a multi-stage pipeline that upon an input of documents, executes four map and four reduce executables, to construct an inverted index
                </li>
                <li>
                    Constructed an index server accessed by a REST API that returns the most relevant documents for a query. The relevance of a document was a measure of its tf-idf cosine similarity score and its page rank score.
                </li>
                <li>
                    Flask, Hadoop, MapReduce, Multistage Pipeline, Inverted Index and bash
                </li>
                </ul>
                <div class="subheading mb-3">MapReduce Server</div>
                <ul>
                <li>
                    Developed a multi-threaded server to execute map reduce jobs. Implemented job scheduling and master-worker communication over TCP and UDP sockets
                </li>
                <li>
                    Implemented fault tolerance by using heartbeats to detect dead workers and reassigning dead worker tasks when necessary 
                </li>
                <li>
                    Python sockets, multi-threading, TCP, UDP
                </li>
                </ul>
                <div class="subheading mb-3">Instagram Website III - Client Side Dynamic Site</div>
                <ul>
                <li>
                    Created a REST API and React front end to make a client side dynamic site
                </li>
                <li>
                    Used asynchronous programing and props inheritance to present multiple dynamic components concurrently
                </li>
                <li>
                    Implemented features such as infinite scroll, double clicking an image to like, and automatically rendering new comments
                </li>
                <li>
                    React, JavaScript, REST, props, async
                </li>
                </ul>
                <div class="subheading mb-3">Instagram Website II - Server Side Dynamic Site</div>
                <ul>
                <li>
                    Implemented user authentication, sessions and account management using SQL and Flask
                </li>
                <li>
                    Created a CRUD backend to delete, create, and edit posts, comments and likes
                </li>
                <li>
                    Flask, SQL, bash
                </li>
                </ul>
                <div class="subheading mb-3">Instagram Website I - Templated Static Site Generator</div>
                <ul>
                <li>
                    Developed a python program to render HTML templates into a static site
                </li>
                <li>
                    Constructed HTML templates for a home page, profile page, followers page, following page, user pages, explore page and post pages
                </li>
                <li>
                    Python3, HTML5, Jinja2, bash, CSS
                </li>
                </ul>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-primary">Winter 2020</span>
            </div>
            </div>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">EECS 388 - Security Projects</h3>
                <div class="subheading mb-3">Forensics Project</div>
                <ul>
                <li>
                    Used online tools and wrote scripts to conduct a forensics analysis on a locked computer. Involved steganography work, analyzing search histories, conducting a buffer overflow attack, and finding leaked files on the dark web
                </li>
                <li>
                    Wrote a report with sufficient evidence to make a claim on the guilt of the investigated party
                </li>
                <li>
                    Python3
                </li>
                </ul>
                <div class="subheading mb-3">App Security Project</div>
                <ul>
                <li>
                    Analyzed programs and determined areas of vulnerability to overwrite the buffer. Use buffer overflow attacks to manipulate the behavior of the program, such as changing output or opening a root shell
                </li>
                <li>
                    Constructed programs that involved indirectly overwriting the return address, opening a root shell from a program where data execution prevention (DEP) had been enabled, opening a root shell from a program that used address-space layout randomization (ASLR), and using ROP gadgets to open a shell
                </li>
                <li>
                    Python3
                </li>
                </ul>
                <div class="subheading mb-3">Networking Project</div>
                <ul>
                <li>
                    Used Wireshark to analyze network packets and extract valuable data such as Mac and IP address pairs, the type of network, and user's activities
                </li>
                <li>
                    Wrote a program to analyze a pcap file to identify suspicious behavior that indicates Address Resolution Protocol (ARP) Spoofing
                </li>
                <li>
                    Developed a program that brute forces potential wifi passwords of a given length. Once on the network, used netcat to spoof an email in order to get onto a private server. Proceeded to use online tools to retrieve more information off of the server such as passwords and encrypted emails
                </li>
                <li>
                    Python3
                </li>
                </ul>
                <div class="subheading mb-3">Web Security Project</div>
                <ul>
                <li>
                    Conducted a SQL injection to successfully forge logging into a website. The website had layers of defenses including escaping single quotes and applying an MD5 hash to users' passwords
                </li>
                <li>
                    Constructed a url that when loaded in a user's browser, executes a cross site scripting attack, logging the attacker into the user's account. Bypasses defenses including the removal of "script", several tags, and some punctuation
                </li>
                <li>
                    Wrote an HTML file that when opened by a user, logs them into an account the attacker controls, giving the attacker the ability to monitor a user's search history. Bypasses a defense that validates users tokens
                </li>
                <li>
                    SQL, HTML, JavaScript
                </li>
                </ul>
                <div class="subheading mb-3">Cryptography Project</div>
                <ul>
                <li>
                    Developed a program that conducts a length extension attack on an inputted MD5 hash
                </li>
                <li>
                    Took advantage of the MD5 hash collision vulnerability to construct two programs with the same MD5 hash but different behavior
                </li>
                <li>
                    Created a program that takes in a Vigenère cipher text  as input and outputs the correct key to decrypt the message using frequency analysis
                </li>
                <li>
                    Developed a program that takes a short message as input and conducts a Bleichenbacher’s attack to forge the RSA signature of that message. The program assumes e = 3
                </li>
                <li>
                    Wrote a program to exploit a cipher block chaining (CBC) padding oracle. Given the oracle and cipher text as input, the program outputs the decrypted message
                </li>
                <li>
                    Python3
                </li>
                </ul>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-primary">Fall 2019</span>
            </div>
            </div>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">EECS 370 - Computer Organization</h3>
                <div class="subheading mb-3">Virtual Cache Simulator</div>
                <ul>
                <li>
                    Developed a program that constructs a virtual write back cache with block size, number of sets, and blocks per set chosen by the user as input variables
                </li>
                <li>
                    Simulates machine code by using the virtual cache
                </li>
                <li>
                    Written in C
                </li>
                </ul>
                <div class="subheading mb-3">Pipeline</div>
                <ul>
                <li>
                    Constructed a LC-2K 5 stage pipeline that handles control dependencies and data hazards
                </li>
                <li>
                    Written in C
                </li>
                </ul>
                <div class="subheading mb-3">LC-2K Linker</div>
                <ul>
                <li>
                    Developed an assembler and linker that uses both a symbol and relocation table in order to handle global and local variables appropriately during the linking process
                </li>
                <li>
                    Written in C
                </li>
                </ul>
                <div class="subheading mb-3">LC-2K Instruction Set Architecture</div>
                <ul>
                <li>
                    Constructed an assembler that accepts assembly language inputs and produces the corresponding machine language as output
                </li>
                <li>
                    Developed a program to simulate the behavior of the machine code
                </li>
                <li>
                    Wrote an assembly language program to multiply two numbers using 7 registers
                </li>
                <li>
                    Written in C and LC-2K
                </li>
                </ul>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-primary">Fall 2019</span>
            </div>
            </div>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">EECS 281 Projects</h3>
                <div class="subheading mb-3">Traveling Salesperson Problem Solver</div>
                <ul>
                <li>
                    Developed a program to find the minimum spanning tree (MST) of an inputted graph in order to find an approximation for the TSP (minimum path weight to travel to each verticy) and output the MST path and weight
                </li>
                <li>
                    Implemented a function to find the true TSP of the inputted graph. However this function is not polynomial time efficient with respect to the input size, and is therefore only applicable to graphs of small sizes
                </li>
                <li>
                    Written in C++
                </li>
                </ul>
                <div class="subheading mb-3">Log Searching</div>
                <ul>
                <li>
                    Constructed a program that reads in a large log file as input and is able to do efficient timestamp, category and keyword searches over the logs by using unordered maps
                </li>
                <li>
                    Written in C++
                </li>
                </ul>
                <div class="subheading mb-3">Star Wars Galaxy Game</div>
                <ul>
                <li>
                    Implemented a pairing priority queue to develop a star wars themed game between two opponents
                </li>
                <li>
                    Written in C++
                </li>
                </ul>
                <div class="subheading mb-3">3D Map Game</div>
                <ul>
                <li>
                    Constructed a program that takes in a 3D map of obstacles such as buttons and trap doors and determines if there is a valid path from the start location to the final destination
                </li>
                <li>
                    Written in C++
                </li>
                </ul>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-primary">Winter 2019</span>
            </div>
            </div>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">EECS 280 Projects</h3>
                <div class="subheading mb-3">Machine Learning Piazza Post Labeler</div>
                <ul>
                <li>
                    Wrote code to take in sample data containing past piazza posts with their corresponding label. This was the training set of data. After processing this, the program would take in the test data which consisted of unlabeled piazza posts. Based on the training data, the program was able to label piazza posts at an 87% accuracy rate. This was my first opportunity to explore machine learning, and I loved the experience. Piazza is a website University of Michigan students use to post questions to the courses they are enrolled in. This program is relevant because it can be used to categorize the topic of a student's question for them based on key words.
                </li>
                <li>
                    Caught all 16 errors in 39 test cases
                </li>
                <li>
                    Written in C++
                </li>
                </ul>
                <div class="subheading mb-3">Calculator</div>
                <ul>
                <li>
                    Implemented a calculator that could handle both postfixed and prefixed operators by using linked lists
                </li>
                <li>
                    Caught all 21 errors in 28 test cases
                </li>
                <li>
                    Written in C++
                </li>
                </ul>
                <div class="subheading mb-3">Euchre Card Game</div>
                <ul>
                <li>
                    Implemented the card game Euchre. To allow any number of users to play the four person game, computer generated players as well as human players were created as objects to have their own respective functions. It outputted the hands of players whenever it was their turn to play, outputted the plays of the game, and outputted score updates after every round. I especially enjoyed this project because Euchre is my favorite card game, and popular in my home state of Michigan.
                </li>
                <li>
                    Caught all 31 errors in 50 test cases
                </li>
                <li>
                    Written in C++
                </li>
                </ul>
                <div class="subheading mb-3">Image Resizing Algorithm</div>
                <ul>
                <li>
                    Designed a seam-carving algorithm to resize an image without editing the contents of the image. Rather than distorting the image, the algorithm removes the most irrelevant pixels from the image.
                </li>
                <li>
                    Written in C++
                </li>
                </ul>
                <div class="subheading mb-3">Statistical Research Analysis Algorithm</div>
                <ul>
                <li>
                    Wrote functions for statistical calculations. These statistical calculations were used on research data about how couples meet and stay together
                </li>
                <li>
                    Written in C++
                </li>
                </ul>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-primary">Winter 2018</span>
            </div>
            </div>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">Universidad De Navarra</h3>
                <div class="subheading mb-3">Mobile Robot</div>
                <ul>
                <li>
                    Worked with students from various backgrounds at Universidad de Navarra to create a robot that could navigate efficiently through a maze
                </li>
                <li>
                    Written in Arduino
                </li>
                </ul>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-primary">Summer 2018</span>
            </div>
            </div>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">ENGIN 100 - Underwater Vehicle Design</h3>
                <div class="subheading mb-3">Remotely Operated Underwater Vehicle</div>
                <ul>
                <li>
                    Designed and coded an intuitive control box to allow for hard and soft turns, as well as pitching of the vehicle
                </li>>
                <li>
                    Collaborated with University of Michigan students on how best to structure vehicle components
                </li>
                <li>
                    Demonstrated leadership by utilizing a Gantt chart to keep the team on track
                </li>
                <li>
                    Written in Arduino
                </li>
                </ul>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-primary">April 2018</span>
            </div>
            </div>
        </section>
    }
}

export default Projects;