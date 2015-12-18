import webbrowser, geocoder

class GeocodeShell:
    def run(self):
        print('''
            Welcome to the Geocode Shell.
            Enter an address to geocode.
            Example format:
            1061 Market St, San Fracisco, CA.

            For a browser interface, type: map

            To quit, type: exit
            ''')
        self.get_input()

    def geocode(self, address):
        coords = geocoder.google(address).latlng
        if len(coords) == 0:
            return 'That address could not be found.'
        else:
            return "(Lat: {0[0]}, Lng: {0[1]})".format(coords)

    def get_input(self):
        while True:
            command = input('>>> ')
            self.handle_input(command)
            if command == 'exit': break

    def handle_input(self, command):
        if command == 'exit':
            print("\nGoodbye.\n")
        elif command == 'map':
            print("To use geolocation, ensure that http.server is running.")
            webbrowser.open('http://localhost:8000/index.html')
        else:
            print(self.geocode(command))




if __name__ == "__main__":
    g = GeocodeShell()
    g.run()
